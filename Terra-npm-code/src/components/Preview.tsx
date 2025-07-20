import Editor from "@monaco-editor/react";

export default function Preview({ data }: any) {
  const tf = `provider "aws" {
  region = "${data.provider.region}"
}

resource "aws_instance" "main" {
  ami           = "${data.instance.ami}"
  instance_type = "${data.instance.type}"
  tags = {
    Name = "${data.tags.Name}"
  }
}`;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Generated Terraform</h3>
      <Editor height="400px" defaultLanguage="hcl" value={tf} theme="vs-light" />
    </div>
  );
}