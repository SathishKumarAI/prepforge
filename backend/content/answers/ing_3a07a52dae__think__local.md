---
qid: ing_3a07a52dae__think__local
question: When would you ask for JSON, XML tags, or markdown as your output format?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 421
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:42:43-05:00'
sources: []
---

**1️⃣ Clarify the context and constraints**  
   * Ask whether the client needs machine‑readable data, human‑friendly display, or both.  
   * Note any platform restrictions (e.g., a REST API expects JSON, a legacy system requires XML).  

**2️⃣ Choose a mental model: “Data vs. Presentation”**  
   * **JSON** = lightweight, native for JavaScript/REST, easy to parse in most languages.  
   * **XML** = verbose, schema‑rich, suited for document‑heavy workflows or when validation (XSD) matters.  
   * **Markdown** = human‑readable text with simple formatting; great for reports, README files, or content that will be rendered on the web.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the end‑user: developer → JSON/XML; editor → Markdown.  
   2. Check interoperability needs: If data must travel between systems, lean toward JSON for brevity and speed.  
   3. Evaluate schema requirements: If strict validation or attribute ordering is critical, choose XML.  
   4. Consider readability: For quick review by non‑technical stakeholders, Markdown is preferable.

**4️⃣ Avoid common traps**  
   * Don’t default to JSON just because it’s “popular”; ignore if the consuming system expects XML.  
   * Forgetting that Markdown can embed HTML or code blocks—be explicit about rendering expectations.  
   * Overlooking security: XML can be vulnerable to XXE; ensure proper sanitization.

**5️⃣ Sanity‑check & communicate**  
   * Summarize your decision: “We’ll return JSON because the API consumer is a web app that parses JSON, and we don’t need schema validation.”  
   * Offer an alternative if constraints change: “If you later need to integrate with a legacy system that only accepts XML, let me know.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
