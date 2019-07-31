-- drop table if exists role2;
-- drop table if exists user2;
-- drop table if exists user_roles2;
-- create table role2 (id bigint not null, description varchar(255), name varchar(255), primary key (id));
-- create table user2 (id bigint not null, age integer, password varchar(255), salary bigint, username varchar(255), primary key (id));
-- create table user_roles2 (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id));
-- alter table user_roles2 add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role2 (id);
-- alter table user_roles2 add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user2 (id);
-- INSERT INTO user2 (id, username, password, salary, age) VALUES (1, 'user1', '$2a$04$Ye7/lJoJin6.m9sOJZ9ujeTgHEVM4VXgI2Ingpsnf9gXyXEXf/IlW', 3456, 33);
-- -- INSERT INTO user2 (id, username, password, salary, age) VALUES (1, 'user1', '$2a$04$dr6i94N4LtjD6wiAr5loQOk9Tpm7WKMsdBaGafGG8NeVX7UXuD0uG', 3456, 33); -- ( user1 | user1 )
INSERT INTO user2 (id, username, password, salary, age) VALUES (1, 'test', '$2a$10$UhQDJ97aH9Q0J4buaWWSYuPzk0CFnjvIxZ4hgNrknTyIeHNLboPIC', 100000, 40); -- ( test | test )
-- INSERT INTO user2 (id, username, password, salary, age) VALUES (2, 'user2', '$2a$04$StghL1FYVyZLdi8/DIkAF./2rz61uiYPI3.MaAph5hUq03XKeflyW', 7823, 23);
-- INSERT INTO user2 (id, username, password, salary, age) VALUES (3, 'user3', '$2a$04$Lk4zqXHrHd82w5/tiMy8ru9RpAXhvFfmHOuqTmFPWQcUhBD8SSJ6W', 4234, 45);


INSERT INTO role2 (id, description, name) VALUES (4, 'Admin role', 'ADMIN');
INSERT INTO role2 (id, description, name) VALUES (5, 'User role', 'USER');

INSERT INTO user_roles2 (user_id, role_id) VALUES (1, 4);
-- INSERT INTO user_roles2 (user_id, role_id) VALUES (2, 5);