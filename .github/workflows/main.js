# name: PR Version

# on:
#   pull_request:
#     types: [opened, synchronize]

# jobs:
#   test:
#     name: Bump Version
#     runs-on: ubuntu-latest
#     steps:
#       - uses: actions/checkout@master
#       - id: version
#         name: Version Bump
#         uses: mitchellsimoens/gpr-pr-version-bump@v1
#         env:
#           NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
#       - name: Create Release
#         id: create_release
#         uses: actions/create-release@v1
#         env:
#           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
#         with:
#           tag_name: ${{ steps.version.outputs.new_version }}
#           release_name: Release ${{ steps.version.outputs.new_version }}
#           prerelease: true
