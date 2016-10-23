json.array! @contacts do |contact|
  json.id contact.id
  json.name contact.name
  json.bio contact.bio
end