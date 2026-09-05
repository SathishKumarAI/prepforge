---
qid: ing_32f8e08005__think__local
question: 'Explain: Custom MCP Integration — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 553
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:27:12-05:00'
sources: []
---

### 1️⃣ Clarify the ask & set assumptions  
- **What is “Custom MCP Integration”?**  I’ll assume it means writing a custom integration for an *MCP* (Multi‑Channel Platform) that interfaces with Claude, OpenAI’s large language model.  
- **Scope of explanation:**  The answer should cover why you’d integrate, the high‑level architecture, key code patterns, and typical pitfalls.  

### 2️⃣ Mental model / framework  
1. **Identify data flow**: user → MCP → Claude API → response → back to user.  
2. **Break into layers**:  
   - *Connector* (MCP‑specific SDK or webhook).  
   - *Adapter* (translates MCP payloads to Claude’s request format).  
   - *Service* (handles authentication, retries, rate limits).  
3. **Use design patterns**: Factory for different channel adapters; Strategy for prompt templates.

### 3️⃣ Step‑by‑step reasoning  
1. **Set up credentials** – store Claude API key securely (env vars, secret manager).  
2. **Write a generic request function** that accepts a prompt and optional metadata, sends it to Claude’s `/v1/chat/completions`, handles JSON parsing.  
3. **Implement channel adapters**: e.g., SlackAdapter parses `event.text` → prompt; WhatsAppAdapter extracts message body.  
4. **Hook into MCP events**: register the adapter as a listener or webhook endpoint.  
5. **Send Claude response back** using the same channel’s API (postMessage, sendText).  
6. **Add error handling & logging** – capture HTTP errors, timeouts, and log payloads for debugging.

### 4️⃣ Common traps to avoid  
- Forgetting content‑type headers → Claude rejects requests.  
- Hardcoding API keys → security risk.  
- Not respecting rate limits → temporary bans.  
- Mixing synchronous I/O in async frameworks → thread starvation.

### 5️⃣ Sanity check & verbalize  
- **Run a unit test** on the request function with a mock response.  
- **Walk through an example flow** (e.g., user says “weather” in Slack) and ensure each component behaves as expected.  
- **Explain aloud**: “When a message arrives, the SlackAdapter turns it into a prompt, our service calls Claude, receives JSON, extracts `choices[0].message.content`, and sends that back to Slack.”  

This structured approach ensures you cover architecture, code snippets, pitfalls, and validation steps in your explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
