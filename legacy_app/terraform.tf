terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = "cloudswap-migrated-project"
  region  = "us-central1"
}

resource "google_cloud_run_v2_service" "api_service" {
  name     = "legacy-app-api"
  location = "us-central1"

  template {
    containers {
      image = "gcr.io/cloudswap-migrated-project/legacy-app-api:latest"
      
      ports {
        container_port = 8080
      }
    }
  }
}

resource "google_cloud_run_service_iam_member" "public_access" {
  location = google_cloud_run_v2_service.api_service.location
  project  = google_cloud_run_v2_service.api_service.project
  service  = google_cloud_run_v2_service.api_service.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
