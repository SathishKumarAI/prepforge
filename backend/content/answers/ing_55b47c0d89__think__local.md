---
qid: ing_55b47c0d89__think__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 551
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:38:57-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Confirm that “Resource Parameter” refers to the *resource* query parameter in RFC 8707, not a generic ML concept.  
   - Assume the reader knows OAuth 2.0 basics but may not know RFC 8707 specifics.  
   - Decide on an explanation depth: high‑level purpose → technical detail → practical use.

**2. Choose a mental model / framework**  
   - **Problem–Solution mapping**: Identify the problem (opaque resource identification in token requests) and show how RFC 8707’s parameter solves it.  
   - Use *“why, what, how”* layers: why needed, what the parameter is, how to use it.

**3. Step‑by‑step reasoning**  
   1. Briefly recall OAuth scopes vs. resource servers.  
   2. Point out the limitation: a token request can target many resources; without explicit indication the server cannot enforce fine‑grained access.  
   3. Introduce the *resource* parameter as an RFC‑defined query string that lists intended resource server URLs or identifiers.  
   4. Explain syntax (comma‑separated list, URI format) and how it is validated by the authorization server.  
   5. Show how the token response can include a *token_type* of “urn:ietf:params:oauth:grant-type:resource” if relevant.  
   6. Mention optional usage in introspection/validation.

**4. Common traps to avoid**  
   - Mixing up *scope* (permissions) with *resource* (target server).  
   - Assuming the parameter is mandatory for all flows; it’s optional unless a resource‑specific flow is used.  
   - Forgetting that the authorization server must support RFC 8707; otherwise the parameter is ignored.

**5. Sanity‑check & verbalize**  
   - Re‑read the explanation: does it start with a clear problem, explain the solution, and give concrete usage?  
   - Try to summarize in one sentence: “The *resource* parameter tells an OAuth server which resource servers the client intends to call so that the token can be scoped appropriately.”  
   - If any step feels vague, fill in with a short example (e.g., `.../token?client_id=…&grant_type=authorization_code&resource=https://api.example.com`).  

Follow this outline and you’ll deliver a concise yet complete answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
