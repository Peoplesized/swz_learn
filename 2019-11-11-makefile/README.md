# Make file tutorial


•	Explored how makefiles work.

•	Makefiles include rules, which are made up of target, prerequisites and commands. They follow the synopsis

    target: prerequisites
        commands...

•	You run a makefile by typing the command `make <rule_name>`, if `<rule_name>` is not  specified the first is ran.

•	Environment variables are passed into makefile by writing the command like so make `<environment_variable>=<value> <rule_name>`.

•	Variables in makefiles are used to hold values

•	Makefiles makes use of tabs for indentation.
