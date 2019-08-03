-- drop table if exists role2;
-- drop table if exists user2;
-- drop table if exists user_roles2;
-- create table role2 (id bigint not null, description varchar(255), name varchar(255), primary key (id));
-- create table user2 (id bigint not null, age integer, password varchar(255), salary bigint, username varchar(255), primary key (id));
-- create table user_roles2 (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id));
-- alter table user_roles2 add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role2 (id);
-- alter table user_roles2 add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user2 (id);

-- Online Bcrypt Hash Generator
-- https://www.devglan.com/online-tools/bcrypt-hash-generator

INSERT INTO user2 (id, username, password, age, salary) VALUES (1, 'admin', '$2a$04$aaCw/KASTXL3SVe.7ETZjeb.Ei/NEG1T9C.9yzhvXTugPnOKAS4Ba', 10, 100); -- ( admin | admin )
INSERT INTO user2 (id, username, password, age, salary) VALUES (2, 'user1', '$2a$04$3UAxUaM8HcGfNra4uES3ieIv.TYQ52hu3audfluRrnWmkGlqEA/tW', 1, 1);    -- ( user1 | user1 )

INSERT INTO role2 (id, description, name) VALUES (1, 'Admin role', 'ADMIN');
INSERT INTO role2 (id, description, name) VALUES (2, 'User role', 'USER');

INSERT INTO user_roles2 (user_id, role_id) VALUES (1, 1);
INSERT INTO user_roles2 (user_id, role_id) VALUES (2, 2);
