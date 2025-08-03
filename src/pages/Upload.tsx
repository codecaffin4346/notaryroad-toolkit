import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload as UploadIcon, FileText, X } from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";

const Upload = () => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    
    // Create preview for PDF/images
    if (file.type.startsWith('image/') || file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Upload Document</h1>
          <p className="text-muted-foreground">
            Upload your legal document for notarization and blockchain verification
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Document Upload</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Drag & Drop Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragOver 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {selectedFile ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <FileText className="w-8 h-8 text-primary" />
                      <div className="text-left">
                        <p className="font-medium">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={removeFile}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <UploadIcon className="w-12 h-12 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium">Drop your document here</p>
                      <p className="text-muted-foreground">or click to browse</p>
                    </div>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button asChild variant="outline">
                      <label htmlFor="file-upload">Choose File</label>
                    </Button>
                  </div>
                )}
              </div>

              {/* Document Details Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Document Title</Label>
                  <Input id="title" placeholder="Enter document title" />
                </div>

                <div>
                  <Label htmlFor="type">Document Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="deed">Property Deed</SelectItem>
                      <SelectItem value="will">Will/Testament</SelectItem>
                      <SelectItem value="power-of-attorney">Power of Attorney</SelectItem>
                      <SelectItem value="affidavit">Affidavit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Brief description of the document"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                      <SelectItem value="priority">Priority (1-2 days)</SelectItem>
                      <SelectItem value="urgent">Urgent (Same day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" disabled={!selectedFile}>
                Submit for Notarization
              </Button>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Document Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {previewUrl ? (
                <div className="space-y-4">
                  {selectedFile?.type === 'application/pdf' ? (
                    <iframe
                      src={previewUrl}
                      className="w-full h-96 border rounded-lg"
                      title="Document Preview"
                    />
                  ) : selectedFile?.type.startsWith('image/') ? (
                    <img
                      src={previewUrl}
                      alt="Document Preview"
                      className="w-full h-96 object-contain border rounded-lg"
                    />
                  ) : (
                    <div className="h-96 flex items-center justify-center border rounded-lg">
                      <p className="text-muted-foreground">Preview not available for this file type</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-96 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground">Select a document to preview</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Upload;