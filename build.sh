set -e
rm -rf ./build
node foam3/tools/genjs
node foam3/tools/genjava -outdir=build/src/java pom
gradle build
rm -rf ./runtime/journals
node copyjrls pom
mkdir -p ./runtime/logs
