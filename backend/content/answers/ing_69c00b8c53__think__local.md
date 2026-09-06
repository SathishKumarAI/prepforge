---
qid: ing_69c00b8c53__think__local
question: 'Explain: SSO (Single Sign-On) — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 529
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:00:19-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Assume the audience knows basic web auth concepts but not the nuances of SSO tokens vs cookies vs sessions.  
   - Focus on how each mechanism stores state, where it lives (client or server), and typical use‑cases in a single‑sign‑on flow.

**2. Adopt a “state‑storage” mental model**  
   - View authentication as *state* that must be transferred between the identity provider (IdP) and service providers (SPs).  
   - Categorise mechanisms by where they keep that state: on the client (cookie), in a signed token, or on the server (session).

**3. Step‑by‑step reasoning**  
   1. **Cookie** – small key/value stored in the browser; sent automatically with each request to its domain.  
      - *Pros*: simple, automatic.  
      - *Cons*: tied to a single domain, vulnerable to CSRF if not secured.  
   2. **Session** – server‑side map keyed by a random ID that is passed back to the client (often via cookie).  
      - *Pros*: server controls data; can expire or be invalidated centrally.  
      - *Cons*: requires server memory or distributed store; scaling challenges.  
   3. **Token (e.g., JWT)** – self‑contained, signed payload sent by client to SPs.  
      - *Pros*: stateless on the server, portable across domains/ microservices.  
      - *Cons*: size, revocation complexity, must be securely stored on client.  

**4. Common traps**  
   - Mixing “token” and “session” terminology; a token can still be stored in a session cookie.  
   - Forgetting that cookies are domain‑scoped—SSO usually relies on a top‑level cookie or a separate IdP cookie.  
   - Assuming tokens cannot be revoked; in practice you need blacklist/short expiry.

**5. Sanity check & verbalise**  
   - Ask: “Does this explanation cover where the state lives, how it’s transmitted, and its trade‑offs?”  
   - Summarise: *Cookies* are client‑side keys, *sessions* are server‑side maps keyed by those cookies, and *tokens* embed the state itself so the server can remain stateless. This triad explains the core differences SSO must navigate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
