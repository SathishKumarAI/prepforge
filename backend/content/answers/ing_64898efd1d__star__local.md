---
qid: ing_64898efd1d__star__local
question: Where does the API key live, and how do you update a prompt after release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 303
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:43-05:00'
sources: []
---

**Situation:**  
When launching our new chatbot for the customer support portal, we discovered that the OpenAI API key was hard‑coded in a Dockerfile and accidentally pushed to GitHub. The production environment had been running with an expired key, so users were seeing “service unavailable” errors.

**Task:**  
I needed to secure the key, ensure it didn’t leak in future deployments, and update the prompt template without redeploying the entire service.

**Action:**  
First, I moved the API key into a secrets manager (AWS Secrets Manager) and injected it at container start via an environment variable. I updated our CI pipeline to fetch the secret during build time and added a runtime check that throws a clear error if the key is missing. For prompt updates, I refactored the code to load the prompt from a versioned JSON file stored in S3; the service polls for changes every 5 minutes and reloads the template in memory without restarting containers. I also implemented an audit log so any change triggers a Slack alert.

**Result:**  
The key is now safely encrypted, eliminating accidental exposure. Prompt updates occur within seconds of editing the JSON, reducing downtime to zero. Since deployment, we’ve seen a 30% drop in support tickets and no security incidents. I learned that separating secrets from code and making prompts hot‑reloadable are critical for both security and agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
