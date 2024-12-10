variable "bucket_name" {
  description = "Name of the S3 bucket"
  default     = "robyn-uzor-terraform-state-backend"
}

variable "dynamodb_table_name" {
  description = "Name of the DynamoDB table"
  default     = "robyn-uzor-db-terraform-state-lock"
}