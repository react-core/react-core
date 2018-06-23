publish:
	git pull --rebase
	./node_modules/.bin/lerna publish --force-publish --conventional-commits --yes
