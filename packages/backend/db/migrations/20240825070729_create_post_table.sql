-- migrate:up

CREATE TABLE post (
  post_uuid UUID PRIMARY KEY,
  post_title TEXT NOT NULL,
  post_content TEXT NOT NULL,
  post_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- migrate:down

DROP TABLE post;
