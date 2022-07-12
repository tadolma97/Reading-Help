class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :story, :moral
end
