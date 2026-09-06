---
qid: ing_877a1bff84__fp__local
question: 'Explain: Request Body — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 558
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:37-05:00'
sources: []
---

### Why a *Request Body* is the heart of a music‑streaming API

At its core, a streaming service must map **user intent** (“play this track”, “add to playlist”) into **system actions** (retrieve metadata, update counters, enforce quotas). The request body is the medium that carries the intent’s *variables*: identifiers, flags, and contextual hints. Without it, the server cannot disambiguate between “play song A” and “play song B” or decide whether a request comes from a premium user.

#### From optimization to design

1. **Minimize latency** – The body must be as compact as possible because every byte traverses a high‑cost network hop.  
2. **Maximize expressiveness** – It should support *composable* operations (e.g., batch‑adding tracks) so the client doesn’t need multiple round‑trips, saving bandwidth and reducing server load.  
3. **Guarantee idempotence** – For write actions, the body must include a de‑duplication token (client‑generated UUID) so repeated retries don’t create duplicate entries.

#### Geometry of payloads

Treat each field as a dimension in a *semantic space*. The API designer chooses a minimal spanning set that still covers all user stories. For example, a `PlayTrack` body might contain:
```json
{
  "track_id": "string",
  "user_id": "string",
  "device_id": "string",   // for analytics & DRM
  "timestamp": "int64",    // client‑side clock skew correction
  "context": {             // optional: playlist/album ID
    "type": "playlist",
    "id": "string"
  }
}
```
Each field’s presence or absence is a binary variable; the space of valid requests becomes a *polytope* whose vertices are the simplest supported operations.  

#### Non‑obvious insight

Most interviewees focus on the *shape* of the body, but overlook **semantic versioning**. A `v1` body that omits optional analytics fields can be upgraded to `v2` by simply adding a `metadata` map. Because clients send JSON, an empty map costs nothing, yet allows backward‑compatible extensions—critical for a service that must evolve without breaking millions of consumers.

In short, the request body is a carefully engineered, low‑dimensional vector that translates user intent into efficient, idempotent, and extensible system actions—a microcosm of the entire streaming platform’s optimization strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
