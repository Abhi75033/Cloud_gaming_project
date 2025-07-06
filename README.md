# 🎮 Cloud Gaming Platform

A browser-based, real-time **Cloud Gaming Platform** that allows users to **launch, play, and spectate games** running inside **Docker containers** on **GPU-enabled servers**. The platform supports **single-player**, **multiplayer**, and **spectator modes**, streamed seamlessly via **VNC or WebRTC**.

---

## 🚀 1. Idea

Build a **cloud-native game streaming platform** that:
- Runs open-source games inside Docker containers
- Streams gameplay to the browser
- Supports multiplayer input routing and spectators
- Uses GPU-enabled EC2 instances on-demand

Inspired by GeForce NOW, but open-source and dev-oriented.

---

## 📦 2. Requirements & Prerequisites

### ✅ Prerequisites
- JavaScript (React, Node.js)
- Docker fundamentals
- REST API & WebSocket knowledge
- AWS EC2 & CLI basics

### 🖥️ System Requirements
- Docker + Docker Compose
- Node.js v18+
- MongoDB (local or cloud)
- AWS CLI (optional)
- GPU-enabled EC2 (e.g. g4dn.xlarge)

---

## 🧠 3. Planning

| Phase | Milestone | Description |
|-------|-----------|-------------|
| 1     | Init      | Setup folders, repo, base Docker image |
| 2     | Game Container | Package game inside GPU Docker image |
| 3     | Backend   | REST API to start/stop containers |
| 4     | Frontend  | UI with React and VNC/WebRTC streaming |
| 5     | Multiplayer | Real-time input forwarding |
| 6     | Spectators | LiveKit/Mediasoup SFU integration |
| 7     | Deployment | AWS EC2 automation, HTTPS, CI/CD |
| 8     | Enhancements | Auth, leaderboards, game saves |

---

## 🛠️ 4. Tech Stack

### 🔹 Frontend
- React + TailwindCSS
- noVNC / WebRTC viewer
- Socket.IO (input events)

### 🔹 Backend
- Node.js + Express
- MongoDB (Mongoose)
- WebSocket / Socket.IO
- Docker CLI via `child_process`

### 🔹 Streaming
- Xvfb + x11vnc
- WebRTC via LiveKit or Mediasoup
- xdotool / xte (simulate input)

### 🔹 Cloud & DevOps
- AWS EC2 (G4/G5)
- EBS for persistent data
- NGINX + Let’s Encrypt
- GitHub Actions (CI/CD)

---

## 🗺️ 5. Detailed Roadmap

### 🔸 Phase 1: Initialization
- Set up project structure
- Create `.gitignore`, README
- Select open-source games (e.g., SuperTuxKart)

### 🔸 Phase 2: Game Containerization
- Dockerfile with:
  - Game install
  - Xvfb + x11vnc
- Test VNC port forwarding

### 🔸 Phase 3: Backend API
- Express.js REST API
  - `POST /api/game/start`
  - `POST /api/game/stop`
  - `GET /api/game/list`
- Use `child_process.exec` to launch containers

### 🔸 Phase 4: Frontend
- React app with Tailwind
- Game dashboard UI
- Embed noVNC/WebRTC stream viewer

### 🔸 Phase 5: Input Control & Multiplayer
- Capture keyboard/mouse input on frontend
- Forward to backend via WebSocket
- Simulate inputs with xdotool

### 🔸 Phase 6: Spectator Mode
- Set up LiveKit/Mediasoup SFU
- Relay video streams to spectators
- Add view-only frontend mode

### 🔸 Phase 7: Deployment
- Create custom AMI with Docker + drivers
- Use Python or Node scripts to launch/terminate EC2
- Add NGINX reverse proxy + HTTPS

### 🔸 Phase 8: Enhancements
- Auth system (JWT)
- Game saves in MongoDB
- Chat, leaderboards, stats dashboard

---

## 🧱 6. Implementation (Detailed)

### 🧩 Docker Image
- Base: `nvidia/opengl:ubuntu`
- Install:
  - SuperTuxKart or similar
  - Xvfb, x11vnc
  - xdotool
- Entry script runs:
  ```bash
  Xvfb :1 &
  export DISPLAY=:1
  x11vnc -display :1 -forever -nopw &
  supertuxkart
