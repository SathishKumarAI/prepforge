---
qid: ing_c3ed95f33c__think__local
question: 'Explain: Step 2: Create a high level design — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 379
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:53:47-05:00'
sources: []
---

**1️⃣ Clarify the goal & context**  
   - Ask: *What does “high‑level design” mean in this repo?*  
   - Assume it’s a skeleton of a large ML system (data pipeline, model serving, monitoring).  
   - Note the audience: interviewers or new contributors.

**2️⃣ Adopt a design framework**  
   - Use the classic **“5 C’s”** (Context, Components, Connections, Constraints, Consistency).  
   - Map each to parts of the repo: data ingestion → component; API gateway → connection, etc.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify core functionalities (train, serve, monitor).  
   2. Sketch a diagram with boxes for each service and arrows for data flow.  
   3. For each box list key tech choices (e.g., Kafka, TensorFlow Serving).  
   4. Highlight scalability knobs: horizontal scaling, statelessness, caching.  
   5. Mention failure handling: retries, circuit breakers.

**4️⃣ Avoid common traps**  
   - Don’t jump straight to code; keep it conceptual first.  
   - Resist over‑engineering small parts—focus on the big picture.  
   - Don’t ignore trade‑offs (latency vs. consistency).

**5️⃣ Sanity‑check & verbalize**  
   - Re‑read the diagram: does every data path make sense?  
   - Explain each component’s purpose in one sentence.  
   - Ask a peer to spot gaps or redundant services.

By following this metacognitive checklist you’ll produce a clear, interview‑ready high‑level design for the repo.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
