class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :users, through: :favorites
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
end
