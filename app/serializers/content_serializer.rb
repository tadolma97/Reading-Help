class ContentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :story_id
end
