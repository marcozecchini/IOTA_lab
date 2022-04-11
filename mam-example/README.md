# Masked Authenticated Messaging
[Blog post](https://blog.iota.org/introducing-masked-authenticated-messaging-e55c1822d50e/)
An example of fetching JSON data over MQTT and sending with MAM to the Tangle

## Installation

Clone this repository and then execute
```
npm install
```

## Getting Started

After you've successfully installed you can execute index for a simple user experience

```
node index.js [sec] [mode]
```

sec: time for loop in seconds

mode: can be 3 (Public: 1, Private: 2, Restricted: 3)

i.e. (Send data in private mode each 15 seconds)
```
    node index.js 15 2
```

To use with Rck SensorNode please use 

```
node indexSensorNode.js [seg] [MAMMode]
```


## Fetching Data

If you want to fetch your data that is on tangle you can run respective file for fetch inside the fetchData folder

```
node fetch.js [root]
```

root: root since you want to fetch

i.e. (for our last example sending data in private mode each 15 seconds)

    node fetchPrivate.js QUYVAZAGSLKPBSXFUWGHGBSTJUDR9KXHPFGF9WXMYFHYULSHEFYXAWDYRHKNSA9GVRFWKALVCUSETQDDJ

# The future of MAM is IOTA Streams
