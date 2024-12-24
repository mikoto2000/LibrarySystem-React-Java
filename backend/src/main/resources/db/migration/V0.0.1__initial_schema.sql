create table ndc_category (
  id bigserial primary key,
  name varchar(255),
  number varchar(20)
);

create table customer (
  id bigserial primary key,
  name varchar(255),
  email_address varchar(255)
);

create table book_master (
  id bigserial primary key,
  name varchar(128),
  publication_date timestamp with time zone,
  ndc_category_id bigint,
  constraint bm_nc foreign key (ndc_category_id) references ndc_category (id)
);

create table author (
  id bigserial primary key,
  name varchar(128)
);

create table book_master_author (
  id bigserial primary key,
  book_master_id bigint,
  author_id bigint,
  constraint bmar_bm foreign key (book_master_id) references book_master (id),
  constraint bmar_a foreign key (author_id) references author (id)
);

create table book_stock_status (
  id bigserial primary key,
  name varchar(255)
);

create table book_stock (
  id bigserial primary key,
  book_master_id bigint,
  book_stock_status_id bigint,
  memo text,
  constraint bs_bss foreign key (book_stock_status_id) references book_stock_status (id),
  constraint bs_bm foreign key (book_master_id) references book_master (id)
);
