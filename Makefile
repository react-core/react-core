publish:
	git remote set-url origin "https://${GH_TOKEN}@github.com/react-core/react-core.git" > /dev/null 2>&1
	./node_modules/.bin/lerna publish --force-publish --conventional-commits --yes


