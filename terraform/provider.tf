provider "aws" {
  profile = "Nnamdi" # Or your profile name
  region  = "us-east-1"
  default_tags {
    tags = {
      Environment = terraform.workspace
    }
  }
}
