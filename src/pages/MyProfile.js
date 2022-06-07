import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const MyProfile = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          flex: 0.2,
        }}>
        <TouchableOpacity>
          <AntDesign name="left" color={'black'} size={24} />
        </TouchableOpacity>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
          Ali Uçar
        </Text>
        <Entypo name="dots-three-horizontal" color={'black'} size={25} />
      </View>
      <View style={{alignItems: 'center', marginTop: 40, flex: 0.3}}>
        <Image
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAADyCAMAAAALHrt7AAABXFBMVEX/////4LRrRzLUj17+1aUcKUI5R17vvoWcZ0bQ2dRoRTH/4bWZZUX/16dwSjTuvIJ6UTj/5rlkPSSKWz/RiVdiOR6TYUKCVjtoQiz/3KvZkl5kPCOEVzxbLgleMhNhOyf08vGGbF/uuXvyxI4AACybh33s6Oe0pp+snJTSiFIkQF4nNEwwRF67r6mPeGzIvrnb1NGBZVdbNCDduJDpybW/gFX0zKAAACUAAC4UIz4uO1NxTzyDaFp5WkpYKADHvLeVf3XCo4GOak+vkHH45M/77uH117bdqIWXXjnZnXXby8Pz4dfmr3mvs7qudE7otogAHkCvfF7SspmAipJNDwCGUCzoyqGxknOcfGDBooDWt5KCXkW4nIXz0av/8d3/58a8j2qwiXPFq5y1iGXu1cbjuJ26vsR0YF5fVl5RXG9vdICZcl5pUEubn6ZeSkoeIjl3fIett7d7dXNAP0fERi87AAARLklEQVR4nN2d+1vbOBaGc4/rBMe5mxAScwukBZpCSUuBAi0t0BvQzjCdMsxMZ9ru9LY7u/v/P89K8iWyLdlycKSw3w8tkJTozTnn05Fkp7FYdNI7Kzs7M6urq9s7icTW9sJKL8JfLkor0xpQAkjTStXp1V3/p+tcBnUldbYQjimtOr3QoT/Z77HxkYMIME3P0FKv98O1AIo5gSDSqk5+Yut6AHWmEx4kUi0tTl0ToNhi1U2UaO2hR3ScoJqoXhcf3HJnXSIxtYMeWV21kW4DoNvChhhOt70hSmiIqDdte8SMligtihyln/Rer6Nj3295gQwivQUKag89B1SatipgrIxaefhwempm6bZufDdFICrtgUda8AuI1oNRrAoccaBWqwnYHGzDuui0CECJ1m0YIUh0x2RujbUrLKHBatXSincuMlS1SEursaUS/HtJ9KAJGrzJi2Zcqjv6KpGoumvZRWnGeEZJ4MBpwgp7ySwdrbrjJJGhoAksldAXsHc1EcUNnKLeNvbNjjcwAECpl2uW8vlaWU0YUAhM2MBpWtzDvum5JyAIU66rijyQopZr+bJiIk2NXRXNLODfOe1aVut1RR6Eww5aop6vqcaPp8fN6B463uI7eM4pquJmGTAptZrxaFUXNHKyOk4gfNAKFcfMxloZPkHbEjV2l4wu83YLb1962ISqJHx5IFI9rySsLk+8jMZyqYS3L1vujPNnkpU8jCJsHMZARqbc0aZWrJ/otmsjM1NV4HBqABOKUWlGGMVA+g/or+mBT620LB61WQaCf9QkqemfevnEmBD1HkIOVDStpY7eWUlYc5BSV/Fpp5lv+hEpNfjoGGTdbgtOQKg3k9UfWy1sBgIQeKHITcnH7+R63fA6XTDQ4tQU/LNkEMCpXx5MoXLZMWZF8gmSXEN/aaI3GBbQCNAiAAUpny/Xm3XFGmbZSSCV6USqSftQbKO6qmnbAyDYzqhYYyDXVVcY6ERyzXxoWmhfB5ocsN5cJK21HaO0vi/XqW1Q04prVeQeA+zatmLPCPs7JoDi+kFeIT8zgeXn1HbwC49KMxqaPoibB1Cq2weUPDVEg3QUaN8LGnr9HcogPTkHhq2SnwmbJPtLcVOsYdjkzRADyDNslhAlqgvBrz0SkXZH/QNiVRGhllTsuS1B7k3eesMH6TZqsydIEDJPxi1wWhdDFASUcBeR2bbJpK4Bq6KEJsgY7tDrx3jXByWj4D+RiVMsHrYW90OJGXgkt1AijAsHGhSR+YVcU6hAMk40xRuo8xA0CcQNecebbo1crpt/N9UEYco1hf10ivsxy4423fPswXkkWaGwqkZBiCp0AHrbANXiDQQmoRZ5+xqTkWGQwwIyigh5g+q7jOW+iQ+j4/8eQ1k5p9i5V7OwrCykiffBkT5NnE5ckvMWh11MRhGp4Cv/94P7Jn6JBcgKEco0BGAWUVl2r5fc4r77CCYhNTjnzBChYlKNr9BMJMmySl0eGeJ9tgccQWEIkdUb1GVj9jEsG+Sc7GmMXOJtC3ua0cIERMmcXAGXWUdGzoG+W/E0Ri5xnlzBagi950FRMnMsr5jTqRkokIPUtYQpzjm3ZwLJTf9hGUkn18tWjqlWyKQAIM45BxfghlGV/cclo6W4LCVMAitEiVqQp/D1OXipiDlf1gKOgeqgKYDxKTfxEJXrATaX4HupVithz5dyzb+NkVVIBLAlo4qahvEFugLXK5vQctVonmEW1XwPGBARMAHFbByM0NSDXEHjubmwi5YO1pssq5JvkLS21m6DBFXMujGTLsgheRaR0Wnb7TQIUp6KJLffrvf7+xdTTdAfGBBKO4G1rDRNcwQyL8IcTPfg3c+7D+tkWdO09trb/uREKpUrnj9W22ttpLV9pS3LAf7IcyaytrCsdtpAKktl1TxSgX+2Hz0G2k9NpqDi8VyxeHl+/g4qXiy+u1jTAnKOoyvYazsVtyqQUeV8rdxUVbVZVy/6k1ATqZQJBJSzBPHOf1LavmtEftc76vZlv27LNg+LwXrnYsJCwYAcAhE7f6ytrbVpQPxsDt8ekYhjkdWUS14ggykeP6d5g8ZtmxvbkZNV0nSiqakJFiCUhcV9Soy4XZCh4xeay03vBmn70YSbhwoEkOJrlBDxWkHsOvav3ESyouxPunH8gOLFtxRv4LWZteB8fbxPgJ7wuzc8/kC5S0qIeAG5X1dO1GoqugpTqdf/TBHC4w8UL+6TiVo6Fx7de+wgK014+WVZfbROxvEHihcfE32B0wKCeE4M49PeWp8kZVswECgjEhEnoEXiqYPWvvDBCQIiE3Fq5kh72traI1+cQKBc8ZGXiNPFMoR8az/u++MEAgGiC88bxQnIc//W2luKs4UBAvOroAi5D4tlhepsoYDiuXO3eQsBIrU5wwF5OwY+QM6DO+0RS3jYgDwh4mPbrpNIpvCwAcWLF7JooPZ6pEA/O62bT+vjrCHGhGMDcnepnLZ9MNvW3kYK5M45TgetmBW1f2bNOEagx4474zmtWLHWp70fLVDuHV5E2h4foKXSyCLkXI3z2sbCLpTTfooWKF7Ea4jXRiNmc3LEphAvPsKIuB0QYYV7ETUQ7grcbgnFNknWok45bI+O38bp7mDjNNpOwWlz/PbqsSJi921GoPMBEMfjoUHKaY9Zi4gRaODbGseL7AdFxN77sAHFi/av5vnhEYOZSGZdDjED2TsLPG8nws6HmH2bFchetfI8YcXOUyIHsiYivhdvD+4aihzImoj4XupjG3fkKWdPRJw/Ice+ATdqU7AnIs43QNj3EkZt2/YqnPM1p9ZN7FFPrIDIACrxvovIan2YV3isQEUhJWT7XNTNqb1Pwv0eInNuXWPECQGEZlYBtxChfo7dtdmB0Gbj4CMNuAl9Kh67J7CbApqIRNy1tqeFKSF2IOjb/C6KwYRCxBwgZiC08SPmg/SWSiEyLgQQdAURPLFYNUTGsQOBIuJ/U6Gh2y32AIUAyq0J+1icX9gDxA4ElkSiPiz0CTtOGKDc5G9ieA5m50YDlJq9FMHzZDY7KqDC7FMBQIVsNjuSGsrNZbOzT7jzHMxms4XRRAgAFfgn3dPCyICyUP9PQPA3z3EHeoJSbgSdQjwOgQS4AgAKY3PsAZosCDGF2GVhREATMEL8eVDOjQQoVRCScbHYXCHMRMQOBKchETwwRCFsLgyQmADBEI0ESFSAYIhC+DYzULwgKkDQ6NhdgTlAkwURFmcqxAKCGSg1eyAO6KAQ/TbWXF8cD/CF6CNU0EUC6cxErEBxgQkHdRA1kKD9BFvMGyXXJECxWNRAAtpspyI+8JoUzRP7LVqgnGge5iJiBBLtCTHmImLMOOElxJxzjBESTQMVJdCvomGg2EJ0fQLEGCIWnHGoIKiDqIDGwOIMxaMBEj+p2ooEaHIsHMHQr1EAjU3CQQVvlgQDiWZw6DKQ6HoFKHYQuEMXCDRGFRRDu6hXBBqXOciUPpsNIAoEEo3gEjwt8q2j6waEzkWvEiHxKzun+vCU32+rOwhovEzOBMoW5ob8kJXxA7pEQICIFqTrBvTUAKIXUhDQeE1DOBDliOW6AR3YQNkCMUjXGIhcSdcaCAaJ9QPzrgeQEaQJGhD80MmxB5rNZj1IZKBcbnJuzoM0Xr0pCQgmHlZLg+CkwAPeCI0dUMELZDIBASzjM07jqblCAfB4c074uRCu54fdBpHHZIJQ8cnJ1Fy2gLgJPMXff3w/Nv917mG3UjmhAiEoQ2ZtESwhXtw/ko7e66JRoPRKJZmsrPsCObyCxBPPvT6SpKMjUZeg4zzdJFDlklxDXp4UkccAAkjiiZJIladMQEQ7wIEkSTTP3W4IIJBuFJ547p0BdPSHYKBuiAgVJmg4AGg9b0ToSCzPBxMoGVxDhTlaujmBngkF+lgxeI7nAnkobuAB+kUo0KEFdKXw4EDSe4E4zw/NhEvSGwWW8DiAzv7YFeTd+nG3wgQUGB4HEJhexVidbvkB1IsrhQeoOAASVUjHSSYglvBAoH0cSITXPe+yABWyPnOPD5CA6eiwwgDk0xq4gX53AXEPkSNAZCDGbCMCSWeceZ4HAwEzYOaJF/908khHOl+gj5UAoDDhgUBnbiDOOXeY9AUqZCfD4AAgyQ3E2bmTvkChsg0pd+Qm4rwycpaQs1MImW2I59IDxNe4dRdQcoipxwG0nvcAce3oXCaXrFwh26Dc8yp3V3ADWUU0RLYZQO5pyLUY15/rowX6QAQaKtsMII8lDICe3D3uAh0/5wqUDNXoeEQwOQn5tn43aS1SundHCHTXAwRCFHLqwXnOCUDv0R4zNoF3R7ih7wVKDh8eoslJ+bMPya6jH6kcjhCo4uap9IfniRd/dgPlpY2k503r8gRKJq8C9KcXh6DuB65AL4rDA7HggCz4OCqe73cahJfrD0uUix8x4ECNBudT5uY2AWj4MsqtHzHhjMbnPmVuZZaJQEMT2Y2PP85Icg7iZDLL/yACDZt1pifk8/44MEQRtwsGDh0oWTkpDtOaHiGcV0E48AX0CHFeLj/IZPyBkpXj8N0p6hOYcJJRNkAvH1g4AOgvGtAwQQJ9AisO/P3dw7sRJN6nzAAHyAcoWUn2i6HaIFBCGz6/jxClbvfj1fyu8/lWxinfAVSSJ3H2MBXjgV5AeIkrpV4nveziWQ54RyuVF2xhyhXjJ4Sug0FX6IP0jEc3Gd7D5MlEAFNueByoYcPzZZ4AxJQlgKmfo0FBmv7x8DhDzkmfPs9vuusHptwZYxVXKscn/XixaP3fzOZ/1FwEMCfHlSFwGg3rlYdpG76n5zfTaRLQ1xC2BMZ9fHLS708al/5N9PsnL5LDwACcjYtvF0nrtUPSdN7Mn6ahSEDUmZVOhWkYFqRvp5ubp6c7BlK4VrX35Z6BQwTynYhGpcZGehMNaPP0G0QK43OfMvOb6bQPEIPNRc5zlrbHBJA2GuxF9P0Uw6EAnfHnuXkLG9Tm6T9fHTPR6Fbp+AItz3DOOcCTueUY1ubpv/7Wg3ne3HPhkIECmp+R8LiAgE7vBSG9dEeHCsQ2tUbK4wUCSPPf/bLt833vP6EAUVbho+QhAaXT8xlqkDqnm6R/kU4TU26ZI88G4iEDpTfnKZcTd+6RcWhAYZqFSHgoQOn0PTLRA0p8KEDcQmTmGxBtfOlNsh9Qn08BIu02joDnq8VDBzp9QwCi81CAwOTKgaixbfPQgdL3vMbwneDXAUCZzOhxNj5ji2X6CDf/DhMgKpDf5k8kOI2Zm/jr+QzxnvvM3C9A9AiNlKjR+Jpx7mX4DPHUHSK/ANGBAFFyREiNxlnmpuvV/MboqqKXfgFKPyDCGESZcFtqzDxfPTj+QC6j83sqrTs1dXN7BEHayLg3zoAe+A7yPs7zyTfjIJJfkJbfN66weUPQK+nCw/OA1ibYIXqJAX2mNgmY6Ew3b3zsRoXUSL7K56VvTqBAGqDNWwOeTlCALFECtfzlxo3X0SBtSHl4+PUX9tsZYJDuf7KB3vhagouJRHTr3zcAUsV78UK44Gy8yptHecthaYA2v7B5tkuUxLsB9ex4+DA1rOBA7dhA/kbglO3cL6nrBoLIPA/eIKIbvdfJYZgcNDDjBiUUYmin1uI1w2IJ/kBG0hlhCs208cpBg2dcqJxLp0NaAhR9Srox0LPXx11GqA1YN+7rYnYwoDA5d78X3Ma5RfVuK+kwqAqgomI1IIvkhZFcHhcm58yeO8S/8GvrBkmHU70+hAeIthqoqwAoiIUE48q4UEBGt9Aj7vSEB3IknRvMVO+9hECoKJ6MC1dE83AqWogk4zLG9Bqg90d+IJZcuRxieKf/icWe/DcCjzPfy++R8Lj7uBDDg7slv4XJON+2m1xGmN4y8TgtIWTO3X/6P9GcvxbPIK8XAAAAAElFTkSuQmCC',
          }}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          @Ali_ucar
        </Text>
      </View>
      <View style={{flex: 0.5}}></View>
    </SafeAreaView>
  );
};

export default MyProfile;
