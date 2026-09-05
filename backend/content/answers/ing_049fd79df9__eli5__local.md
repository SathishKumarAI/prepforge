---
qid: ing_049fd79df9__eli5__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 199
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:47-05:00'
sources: []
---

Think of OAuth 2.0 like a hotel key that lets you into rooms (resources) on a big campus.  
**Authorization Request** is the step where you ask the front desk for a key that opens a specific room.  

RFC 8707 adds *resource indicators*: tiny tags you attach to your request telling the front desk exactly which room you want, not just “any room.”  
- **Resource server** = the building that owns the rooms.  
- **Audience** = the list of buildings you’re allowed to enter (the “allowed hosts”).  

When you send a token with a resource indicator, the front desk checks: *Is this key for me? Is this room on my list?* If yes, it lets you in; if not, it says no.  
This keeps requests clear and prevents keys from being misused for unintended rooms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
