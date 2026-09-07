---
qid: ing_475df33fe0__faang__local
question: 'Explain: The underlying technology — What is Docker? | Docker Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:07-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise technical overview of *Docker*—the platform that packages applications and their runtime environments into portable containers. I’ll assume the audience knows basic OS concepts (processes, filesystems) but not container internals.

---

**Approach**  
1. Define containers vs virtual machines.  
2. Explain Docker’s core components: Engine, CLI, Registry, Images/Containers.  
3. Highlight underlying kernel features: cgroups, namespaces, union‑fs.  
4. Mention how Docker orchestrates images into runtime layers and networking.

---

**Depth**  
Docker is a client–server system where the *Engine* (daemon) runs on Linux hosts. It uses **Linux Kernel namespaces** (PID, UTS, IPC, network, mount) to isolate processes, and **cgroups** to limit CPU/memory. The filesystem layer is built with **copy‑on‑write union‑filesystems** (e.g., AUFS, OverlayFS), allowing immutable image layers that share data efficiently. Images are declarative manifests; containers are runtime instances of those images. Docker CLI talks to the Engine over a REST API, and images can be pushed/pulled from registries like Docker Hub.

---

**Edge Cases**  
- On non‑Linux hosts (Windows/macOS), Docker runs a lightweight VM (Hyper‑Kit/WSL2) to expose the same kernel features.  
- Security: without proper isolation, privilege escalation is possible; best practice is to run as non‑root and use user namespaces.  
- Storage drivers conflict on older kernels; testing with different union‑fs options is essential.

---

**Optimize & Communicate**  
I’d emphasize Docker’s **layered cache** for fast rebuilds and its *immutable* image philosophy, which reduces “works‑on‑my‑machine” bugs. In a real interview I’d illustrate the architecture diagram, discuss trade‑offs (e.g., performance vs isolation), and outline how to troubleshoot common issues—showing both breadth and depth in a clear, structured way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
