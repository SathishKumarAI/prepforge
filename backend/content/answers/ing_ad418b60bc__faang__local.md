---
qid: ing_ad418b60bc__faang__local
question: 'Explain: Set environment variables first — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 480
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:16-05:00'
sources: []
---

**Clarify**  
You’re asking how to set up the environment for running AI evaluations using *Langwatch* and *Langfuse*. I’ll assume you need the minimal variables to authenticate against each service, point to a project or model ID, and control runtime options (e.g., concurrency).  

**Approach**  
1. List required keys for Langwatch (`LW_API_KEY`, `LW_PROJECT_ID`).  
2. List required keys for Langfuse (`LF_API_KEY`, `LF_PROJECT_ID`, optional `LF_HOST`).  
3. Create a `.env` file or export in the shell.  
4. Verify connectivity with simple test scripts.  

**Depth**  
```bash
# .env example
LW_API_KEY=sk-xxxxxxxxxxxxxx
LW_PROJECT_ID=langwatch-prod
LF_API_KEY=lf-xxxxxxxxxxxxxx
LF_PROJECT_ID=langfuse-demo
LF_HOST=https://api.langfuse.com   # optional, defaults to prod
```
Load with `source .env` or use a package like `python-dotenv`.  
When initializing clients:  

```python
from langwatch import LangwatchClient
client_lw = LangwatchClient(api_key=os.getenv("LW_API_KEY"),
                            project_id=os.getenv("LW_PROJECT_ID"))

from langfuse import Langfuse
client_lf = Langfuse(api_key=os.getenv("LF_API_KEY"),
                     project_id=os.getenv("LF_PROJECT_ID"),
                     host=os.getenv("LF_HOST"))
```
Both libraries will raise clear errors if a key is missing, ensuring early failure.  

**Edge Cases**  
- Missing `.env` → silent defaults cause API failures.  
- Wrong `project_id` → data ends up in the wrong workspace.  
- Network hiccups → retries should be handled by the SDKs.  
Test with unit mocks and integration runs against a sandbox project.  

**Optimize & Communicate**  
Store secrets in a secure vault (e.g., AWS Secrets Manager) for CI pipelines instead of plain files. Document the variables in README, and use a `make env-setup` target to scaffold the file. This keeps onboarding fast and reduces runtime errors—key points interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
