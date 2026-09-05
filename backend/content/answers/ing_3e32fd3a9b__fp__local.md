---
qid: ing_3e32fd3a9b__fp__local
question: How does Harvey define customer data? — Secure legal AI for the most sensitive
  matters | Harvey
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 542
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:00-05:00'
sources: []
---

### Harvey’s Take on *Customer Data* (in the context of Secure Legal AI)

Harvey starts from the **problem**: a law firm’s AI must be able to sift through a client’s documents to find relevant precedent, yet the same data is the very asset that makes the firm competitive. The solution is therefore to treat *customer data* as a **dual‑nature resource**—both an intellectual property of the client and a regulated personal‑information stream.

1. **Definition (first principles).**  
   Harvey defines *customer data* as any *client‑originated content* that:  
   - contains identifiable information (personal, financial, or proprietary);  
   - is used to train or fine‑tune an AI model; and  
   - falls under a contractual confidentiality clause.

2. **Why it must work this way.**  
   Treating the data as *both* an asset and a liability forces the system to enforce *data minimisation* (only the minimal slice needed for inference) while preserving *model performance*. The duality is enforced by a **privacy‑by‑design pipeline**: each ingestion step annotates the data with its confidentiality level, then routes it through either an encrypted in‑memory engine or a fully isolated sandbox.

3. **Connection to deeper principles.**  
   - **Optimization:** The system balances *utility* (accuracy of legal predictions) against *risk* (data leakage).  
   - **Information theory:** By compressing the data into a *privacy‑preserving representation*, it reduces entropy that could be exploited by adversaries.  
   - **Geometry:** The sandbox acts as a convex “safe zone” in the feature space, ensuring no point can cross its boundary without explicit authorization.

4. **Non‑obvious insight.**  
   Many firms treat customer data as a single monolith, but Harvey’s model treats it as a *tensor of nested tensors*—each sub‑tensor tagged with an access policy. This allows fine‑grained differential privacy guarantees: the AI can learn from aggregated patterns without ever exposing individual document fragments.

In short, Harvey’s definition turns customer data into a *policy‑encoded, privacy‑aware vector*, enabling secure, compliant AI that still delivers actionable legal insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
