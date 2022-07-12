class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :story_id
end
