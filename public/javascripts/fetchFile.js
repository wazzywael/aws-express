const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "ASIA5MVXPCGMTLKVVBUN",
  secretAccessKey: "7IftXrkV3TUiFMWxB+Ycqn66lMaqG77r8Odp2+BS",
  sessionToken:
    "IQoJb3JpZ2luX2VjEAYaCWV1LXdlc3QtMSJGMEQCIEBsvEem52R0xN8oRskZjpgsxT1yRJsd3yIWA9A6a/jeAiAdRJ3PiUSeqZ/PtyAHRhH1ID6Y5YppgszyFzy7SP0cQiqLAwju//////////8BEAAaDDkyMDU4MTUwOTUyOSIMQCZmln50x3oAnylQKt8Ciq1eGt8NF2eLrAXih8SqeGGoB94bXmxPGjcf3pAkXgNyWfR8mXkPzqqL9ycQkM+AiYoaK1OU0YNHEX+mNQEsrA9GuUV0ypMdJKXFtEOE5eAbgI7eOjJKCWIeYvKZUPdOaIfiij48+7gxQSWACv8tfXG2B3jvhm0iDPZaHydk4wAEAsz1OgVuccvDwzncyAM57F4nWBDa5YzeKGGym9cXJ6nZGPjq7Qi03ujpVP9F0zHlpwyIUKkbX/QLvgglXNMV2/nwzDQRh6mEgPX0FKO8f8Mfuu2czmPbNc7Hmp8vfa5u9q7WltKH6F4EOMvrb204ulfR/DJ7JpGKR1h9RPYzMT/lcdikr4Cjc+4C17cifvfvghPF9pIrtfKom5issXrNCdZihbJZRNj/spEOr6ukewVd5h6LRbW4Fjblzn+x1MOjg5pzwNfU0KlXgmxpBWtTkjjzE5jjDGaojBzLVgl0MJeDsagGOqcBfj69rxyDUAdj/RBCEkX+RYFaN9nWc+NIjJpYUyjeSeMDpMxURXIcBeG3Z3yEud6ODnBT7kir3P9+HkNNKLcTXRrMDSduJ9Z87M5rqX7utZExXlgw8GREKQUmhC7SkA4XEbtQBWyVGqNG7/y5IMytsy7jMT/kgLQgtHs/Jdi/qtr2TTVJPzvqxED8BVM6HKMo9i1d2lju5cSrjspVfdL4Vd1bj7Jenq4=",
  region: "eu-west-1",
});

const S3 = new AWS.S3();

module.exports = {
  getFileFromS3: () => {
    return new Promise((resolve, reject) => {
      try {
        const bucketName = `opensource-reactions`;
        const objectKey = `reaction.mp4`;
        S3.getObject(
          {
            Bucket: bucketName,
            Key: objectKey,
          },
          (err, data) => {
            if (err) {
              reject(err);
            } else {
              const myObj = {
                room: "0000",
                id: "",
                contentType: data.ContentType,
              };
              console.log("Unparsed Fetched Object Data:", data);
              console.log(myObj);
              resolve(myObj);
            }
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  },
};
