SHELL := /bin/bash

ORANGE := $(shell printf "\e[2D\e[33m ")
OK     := $(shell printf "\e[2D\e[32m✅ ")
WARN   := $(shell printf "$(ORANGE)⚠️ \e[1m")
INFO   := $(shell printf "\e[2D\e[36mℹ️ ")
ERROR  := $(shell printf "\e[2D\e[31m❗ ")
END    := $(shell printf "\e[0m")

.PHONY: compile-events

compile-events:
	@echo -e "$(INFO) Compiling ../events using avro-to-typescript... $(END)"
	cd ../events && gradle generateAvsc
	npx @chasdevs/avro-to-typescript@latest -c ../events/target/generated/avsc .
	@echo -e "$(OK) Compiled local events. Link using  $(ORANGE)npm link$(END)"
