---
qid: ing_946ea3e414__think__local
question: What is Spotify? — Design Spotify | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 462
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:54:22-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm whether “what is Spotify?” means *a brief product description* or *the architecture of a music‑streaming service*.  
   - Assume we’re speaking to an interviewer: they likely want you to outline key components (users, catalog, playback) and how you’d scale them.

**2️⃣ Adopt the System‑Design framework**  
   - Start with **high‑level use cases**: discover content, play music, create playlists.  
   - Map each use case to a *service* (e.g., User Service, Catalog Service).  
   - Think in layers: UI → API Gateway → microservices → data stores → infra.

**3️⃣ Step‑by‑step reasoning**  
   1. Define core entities (User, Track, Album, Playlist).  
   2. Sketch major services and their responsibilities.  
   3. Choose storage patterns (relational for users, NoSQL for catalog metadata, CDN for media).  
   4. Consider real‑time needs: caching, streaming protocols, QoS.  
   5. Address scalability: sharding by user ID or region, load balancers, auto‑scaling.

**4️⃣ Avoid common traps**  
   - Don’t jump straight into code; focus on *architecture* first.  
   - Beware of over‑optimizing one layer (e.g., streaming) at the expense of others (catalog search).  
   - Remember to discuss trade‑offs: consistency vs latency, single‑point failures.

**5️⃣ Sanity‑check & communicate**  
   - Revisit each component: does it serve a user need? Is it horizontally scalable?  
   - Summarize clearly: “Spotify is a distributed system that lets users discover, curate, and stream millions of tracks with low latency by combining microservices, caching, CDNs, and robust data stores.”  

By following this structured thought process you’ll demonstrate clarity, depth, and the ability to translate business requirements into a scalable architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
