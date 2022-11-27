use potexpress;

drop procedure if exists add_buyer;
delimiter //
create procedure add_buyer (in ip_fname varchar(100),
    in ip_address varchar(100), in ip_state varchar(100),
    in ip_email varchar(100), in ip_strain varchar(100))
sp_main: begin

	-- Implement your code here
    insert into buyer (fname, address, state, email, strain)
    values (ip_fname, ip_address, ip_state, ip_email, ip_strain);
end //
delimiter ;