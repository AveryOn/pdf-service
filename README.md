# PDF-SERVICE
---

## Архитектура:

┌──────────┐   HTTP/AMQP    ┌───────────┐   PDF Buffer   ┌────────────┐
│  Client  │ ─────────────► │  Gateway  │ ─────────────► │  Renderer  │
└──────────┘                └───────────┘                └───┬────────┘
                                   ▲                         │
                                   │PDF URL / Error          │
                                   │                         ▼
                              ┌────────────┐   S3-PUT   ┌────────────┐
                              │  Uploader  │──────────►│  S3/Bucket │
                              └────────────┘            └────────────┘


* Gateway – Fastify route /generate 
* Renderer – чистая функция (job) => Buffer, завязана только на pdfmake.
* Uploader – адаптер на @aws-sdk/client-s3; эндпойнт и креды из ENV.
* Логика идемпотентности – прежде чем рендерить, HEAD в бакет по ключу documents/{paymentId}.pdf.
* Расширяемость – новые storages = новый адаптер, новые форматы = другой рендерер и итд

