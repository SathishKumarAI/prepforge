---
qid: vq_75d30ef4b9__eli5__local
question: Why does this command fail when executed?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 293
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:21-05:00'
sources: []
---

Think of a DSA (Digital Signature Algorithm) key pair like a master key and a lock‑box.  
The private key is the master key that can open only your own box, while the public key is the lock that everyone else uses to verify you opened it.

When you run a command such as

```
openssl dgst -sha256 -sign privkey.pem -out sig.bin file.txt
```

and it fails with “Bad magic number” or “invalid format”, the most common reason is that the *private key file* isn’t actually in the DSA format OpenSSL expects. It’s like trying to use a house key on a car lock: the shapes don’t match.

In plain terms:

- **Private key** = your secret master key (must be DSA‑formatted).  
- **Public key** = the lock people can test against.  

If `privkey.pem` was generated for RSA, ECDSA, or is just a text file, OpenSSL can’t read it as a DSA key, so the command aborts. Convert or regenerate the key in proper DSA format, and the command will work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
