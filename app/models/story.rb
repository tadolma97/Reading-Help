class Story < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :favorites, dependent: :destroy
    validates :title, uniqueness: true

end
