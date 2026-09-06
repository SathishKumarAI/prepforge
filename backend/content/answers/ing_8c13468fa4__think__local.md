---
qid: ing_8c13468fa4__think__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 592
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:19:09-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is being requested?*  
  The user wants a guide on how to **fetch traces and filter by span name** using the “AI Evals” tooling, specifically within the **Langwatch / Langfuse** ecosystem.  
- *Assumptions:*  
  - They’re already familiar with basic tracing concepts (traces, spans).  
  - They have a working instance of Langwatch/Langfuse and API credentials.  
  - They want a practical, code‑level walkthrough.

---

**2️⃣ Choose a mental framework**

1. **Understand the components** – Langwatch’s trace storage, the API endpoints, authentication, query language (GraphQL/REST).  
2. **Map the workflow** – “Retrieve all traces → filter by span name → process results.”  
3. **Translate to code patterns** – request building, pagination handling, error checking.

---

**3️⃣ Step‑by‑step reasoning**

1. **Auth & client setup**  
   - Load API key from env or config.  
   - Instantiate Langwatch/Langfuse SDK or HTTP client.

2. **Build the query**  
   - Decide on GraphQL vs REST.  
   - For GraphQL: write a query that accepts a `spanName` variable and returns trace IDs, timestamps, etc.  
   - For REST: determine endpoint (e.g., `/traces?filter=span_name==foo`).  

3. **Send the request**  
   - Handle pagination: loop until no more pages or set limit.  
   - Capture HTTP status codes; retry on transient errors.

4. **Filter locally if API can’t**  
   - If only trace IDs come back, fetch each trace and inspect spans for matching name.  

5. **Return/print results**  
   - Format output (JSON list, table).  
   - Optionally write to a file or feed into downstream analysis.

---

**4️⃣ Common pitfalls**

- *Assuming the API supports filtering directly* – check docs; sometimes you need client‑side filtering.  
- *Ignoring pagination* – leads to incomplete data.  
- *Hard‑coding credentials* – security risk; use env vars.  
- *Not handling rate limits* – can block the script.

---

**5️⃣ Sanity‑check & communicate**

1. **Dry run**: test with a known span name that exists.  
2. **Verify counts**: compare returned trace count vs expected.  
3. **Explain each step in comments** so others (or future you) understand the flow.  

End with a concise “quick‑start” snippet and pointers to official Langwatch/Langfuse docs for deeper dives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
