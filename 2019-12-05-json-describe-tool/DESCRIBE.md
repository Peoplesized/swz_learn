
--level 1
  - type
  - simpler
  - features

--level 1 --summarise_values
  - type: string
  - simpler: {2 keys}
  - features: [20 elements]


--level 2
  - type
  - simpler:
    - no
    - to_describe
  - features:
    - [20 elements] (first element keys? different shapes?)
      - type: on_every_row
      - properties: not_on_every_row
      - geometry: on_every_row


--level 2 --summarise_values
  - type: string
  - simpler:
    - no
    - to_describe
  - features:
    [20]
      - type: string, most_common: 'Feature', first: 'Feature'
      - properties: object
      - geometry: object


--level 3
  - type: string
  - simpler:
    - no
    - to_describe
  - features:
    [20]
      - type: string
      - properties: object
      - geometry: object


--template
  type: "blank_string",
  simpler: {
    no: "blank_string",
    to_describe: {
      objects_all_the_way: "blank_string""
    }, 
  },
  features: [20 elements]
