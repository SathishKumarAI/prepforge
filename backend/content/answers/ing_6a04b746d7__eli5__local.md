---
qid: ing_6a04b746d7__eli5__local
question: 'Explain: 4.1 Requirement 1: Music Streaming — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 262
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:05-05:00'
sources: []
---

Imagine you’re building a giant, ultra‑fast library where people can walk in and instantly pull out any song they want, no matter how many shelves (servers) it takes to hold all the music.  

**Requirement 1: Music Streaming**  
- **What it means:** The system must let users search for a track, play it on demand, and switch tracks or pause without noticeable delay.  
- **Key parts of the design:**  
  1. **Storage layer** – where millions of songs live (think big bookshelves).  
  2. **Caching layer** – keeps popular songs in quick‑access “reading desks” so they load instantly.  
  3. **Streaming server** – streams audio packets to users’ devices, handling buffering like a waiter passing plates smoothly.  
  4. **Load balancer** – directs each user request to the right shelf or desk, preventing any one part from getting overcrowded.  

In short, you’re designing a system that feels like walking into a well‑organized music library: find your song, press play, and hear it immediately, no matter how many people are in the room.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
