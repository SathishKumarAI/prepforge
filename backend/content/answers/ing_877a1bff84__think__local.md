---
qid: ing_877a1bff84__think__local
question: 'Explain: Request Body — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 507
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:59:27-05:00'
sources: []
---

**1. Clarify the ask and assumptions**  
- Identify the *exact* request body format needed to “design a Spotify‑style music streaming service” (e.g., JSON schema).  
- Assume the interviewer wants you to cover API endpoints, data models, authentication, rate‑limits, and privacy considerations.  
- State any constraints you’ll impose (e.g., language agnostic, focus on RESTful design).

**2. Adopt a systematic framework**  
- Start with **high‑level user stories** → map them to **resources** (users, tracks, playlists, streams).  
- Use the **CRUD + streaming pattern**: `POST /playlists`, `GET /tracks/{id}`, `PUT /streams/subscribe`.  
- Apply the **RESTful design principles**: resource URIs, HTTP verbs, status codes.  
- For real‑time features (e.g., live streams), consider WebSocket or SSE endpoints.

**3. Step‑by‑step reasoning**  
a. Enumerate core entities and their relationships.  
b. Draft endpoint signatures, payload examples, and response structures.  
c. Add authentication tokens in headers; describe token lifecycle.  
d. Include pagination for large collections (e.g., `?limit=50&offset=100`).  
e. Show error handling with standard JSON error bodies.  
f. Highlight optional fields (e.g., `explicit`, `genre`) and versioning (`/v1/...`).

**4. Avoid common pitfalls**  
- Don’t conflate “design” with “implementation”; focus on the contract, not code.  
- Skip over‑engineering: no need to detail every microservice; just outline major APIs.  
- Beware of security oversights—omit user passwords in request bodies; use OAuth tokens instead.

**5. Sanity‑check & verbalize**  
- Verify that each endpoint serves a clear business purpose and follows naming conventions.  
- Read the schema aloud: “A POST to `/v1/playlists` with `title`, `description`, and an array of track IDs creates a playlist; it returns the new playlist ID.”  
- Ask clarifying questions if the interviewer expects more depth (e.g., caching, rate‑limiting).  

This structured approach lets you articulate a clean, realistic request body design for a Spotify‑like system while demonstrating clear thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
