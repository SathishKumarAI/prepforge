---
qid: ing_30ca8d83c1__think__local
question: 'Explain: Implementation Timeline | EU Artificial Intelligence Act'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 584
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:22:16-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - *What exactly is “Implementation Timeline”?*  I’ll assume it means the key milestones that firms and regulators must hit to comply with the EU AI Act, not a day‑by‑day plan.  
   - *Audience:* A mix of data scientists and product managers—so keep jargon low but precise.  
   - *Scope:* Focus on the Act’s main provisions (risk categories, conformity assessment, market surveillance) rather than every regulatory detail.

**2. Mental model / framework to apply**  
   Use a **“Compliance Lifecycle”** diagram:  

   1. **Risk classification →** Identify if your AI system is “high‑risk,” “limited risk,” or “minimal risk.”  
   2. **Pre‑market actions →** Documentation, data governance, human oversight design.  
   3. **Conformity assessment →** Internal audit (for low/high‑risk) vs. notified body (for high‑risk).  
   4. **Market entry →** CE-like marking, register with the national authority.  
   5. **Post‑market obligations →** Monitoring, updates, incident reporting.

**3. Step‑by‑step reasoning toward the answer**  
   - Start by summarizing the Act’s effective date (July 2024) and the “grandfather” clause for existing systems.  
   - Map each risk category to its required timeline: e.g., high‑risk AI must have a conformity assessment *before* first deployment, whereas low‑risk only needs an internal compliance check.  
   - Highlight key deadlines: data protection impact assessment (DPIA) within 3 months of design; notification to the authority at least 30 days before market entry.  
   - Mention ongoing obligations: annual audits for high‑risk systems and continuous monitoring.

**4. Common traps & how to avoid them**  
   - *Overloading with legalese:* Stick to concrete actions, not paragraph numbers.  
   - *Assuming one size fits all:* Emphasize that timelines differ by risk level and by whether the system is new or already deployed.  
   - *Missing post‑market duties:* These are often overlooked but crucial for compliance continuity.

**5. Sanity‑check & communicate clearly**  
   - Re‑read to ensure every bullet maps back to a specific Act requirement.  
   - Ask: “If I were a product manager, would this tell me exactly when to start the DPIA?” If not, tighten that point.  
   - Deliver in a short, bulleted format with a simple visual timeline (optional), so the reader can quickly see when each step must occur relative to market launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
