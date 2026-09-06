---
qid: ing_ddfeb07abf__think__local
question: 'Explain: Write Job Descriptions — GitHub - crewAIInc/crewAI: Framework
  for orchestrating role-playing, autonomous AI agents. By fostering collaborative
  intelligence, CrewAI empowers agents to work together seamlessly, tackling complex
  tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 597
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:38:08-05:00'
sources: []
---

### 1. Clarify the Goal  
- **What is being asked?** We need to explain *how* the “Write Job Descriptions” feature works in CrewAI’s GitHub repo, not just describe it superficially.  
- **Assumptions:** The reader knows basic AI/ML concepts but may be unfamiliar with role‑playing agents or the specific repo structure.

### 2. Build a Mental Model  
- **Framework Overview:** CrewAI orchestrates multiple autonomous agents that play distinct roles (e.g., “Researcher,” “Writer”).  
- **Job Description Role:** These are templates that define each agent’s responsibilities, constraints, and output format—essentially the “job contract” for an AI role.  
- **Why It Matters:** Clear job descriptions guide agent behavior, reduce ambiguity, and enable collaboration.

### 3. Step‑by‑Step Reasoning  
1. **Locate the Feature in the Repo** – look under `/src` or `/templates` for a `write_job_descriptions.py` (or similar).  
2. **Identify Inputs & Outputs** – inputs: task prompt, desired role count; outputs: JSON objects describing each agent’s role.  
3. **Explain the Generation Logic** – likely uses an LLM to produce structured text that includes:
   - Role title
   - Key responsibilities
   - Required skills or data sources
   - Success criteria / deliverables  
4. **Show Interaction Flow** – how these job descriptions feed into the orchestrator, which assigns tasks and monitors compliance.  

### 4. Common Traps to Avoid  
- **Over‑simplifying:** Don’t just say “it writes roles”; explain the *structure* and *purpose*.  
- **Ignoring Dependencies:** Remember that job descriptions tie into other modules (e.g., `Agent`, `Crew`).  
- **Assuming Static Templates:** Highlight that the feature can generate dynamic, task‑specific descriptions.

### 5. Sanity‑Check & Communicate Clearly  
- **Re‑read for Accuracy:** Verify that your explanation matches the actual code comments and docstrings.  
- **Use Concrete Examples:** Show a snippet of a generated job description to illustrate key fields.  
- **Keep It Concise but Complete:** Aim for 3–4 short paragraphs plus a brief example block.

By following this scaffold, you can produce a clear, accurate explanation that helps readers grasp both the *what* and the *why* behind CrewAI’s “Write Job Descriptions” feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
