# QR Platform

A full-stack QR code redirection platform built with a frontend UI for QR generation and a backend redirection API. Designed for cloud-native deployment using Helm and Kubernetes.

---

## 📁 Project Structure

```
qr-front/ # Frontend UI for QR code generation
qr-redirect/ # Backend API for QR code redirection
chart/ # Helm chart for deploying the application
```

---

## 🌐 Services Overview

### 🖥️ `qr-front`

A user-facing frontend application for generating and downloading QR codes.

- **Tech Stack:** Next.js, Tailwind CSS
- **Main Features:**
  - Clean and responsive QR generator UI
  - Accepts URL input and renders a QR code
  - Supports both SVG and PNG format downloads

### 🔁 `qr-redirect`

A backend redirection service that processes scanned QR requests.

- **Tech Stack:** Go, Gin, ent (ORM)
- **Main Features:**
  - Accepts QR code IDs and redirects to the mapped URL
  - Responds with proper HTTP 301/302 status

---

## 🚀 Deployment

### Using Helm (in `chart/` directory)

This project includes a production-ready Helm chart for deploying both services into a Kubernetes cluster.

#### 🧪 Example Installation

```bash
cd chart
helm install qr-platform . -n qr --create-namespace

