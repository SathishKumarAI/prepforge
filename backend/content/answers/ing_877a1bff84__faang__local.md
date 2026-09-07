---
qid: ing_877a1bff84__faang__local
question: 'Explain: Request Body — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 561
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:59:07-05:00'
sources: []
---

## 1️⃣ Clarify  
We’re asked to **design the request‑body schema** that a client (e.g., a mobile app) would send when interacting with a backend service like Spotify.  
*Assumptions I’d confirm:*  
- Which endpoints are in scope (play, pause, create playlist, etc.)?  
- Are we targeting REST or gRPC?  
- Do we need to support batch operations (e.g., add multiple tracks)?  

## 2️⃣ Approach  
1. **Identify core entities**: User, Track, Playlist, Session.  
2. **Map actions → verbs**: `play`, `pause`, `addTrack`, `createPlaylist`.  
3. **Normalize request format**: Base fields (`userId`, `timestamp`) + action‑specific payload.  
4. **Add validation & versioning tags** for backward compatibility.  

## 3️⃣ Depth (Schema Example)  
```json
{
  "requestId": "<uuid>",          // idempotency key
  "clientVersion": "1.2.0",
  "timestamp": "2026-09-06T12:34:56Z",
  "user": {
    "id": "u12345",
    "sessionToken": "eyJhb..."
  },
  "action": "addTrackToPlaylist", // enum
  "payload": {
    "playlistId": "pl67890",
    "trackIds": ["t111","t222"]
  }
}
```
- **Validation**: schema‑driven (JSON Schema), type checks, required fields.  
- **Security**: OAuth token in `user.sessionToken`, HMAC on `requestId`.  
- **Performance**: compress JSON with gzip; batch payloads keep size <1 KB.

## 4️⃣ Edge Cases  
- Duplicate `requestId` → idempotent handling.  
- Missing or expired `sessionToken` → 401 response.  
- Invalid `trackIds` (not in catalog) → partial success with error list.  

## 5️⃣ Optimize & Communicate  
*Improvements:*  
- Use **Protocol Buffers** for binary payloads to cut bandwidth by ~70 %.  
- Add a `clientHints` object to let the server adapt streaming quality.  
*Communication:* I’d walk the interviewer through each field, justify choices (e.g., idempotency), and discuss trade‑offs between JSON readability vs protobuf efficiency, keeping the narrative concise yet thorough.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
