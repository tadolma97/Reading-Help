class StoriesController < ApplicationController

    def index 
        stories=Story.all 
        render json: stories
    end
    def create
         story=Story.create!(story_params)
         render json: story, status: :created
    end

    private 
    def story_params
        params.permit(:title, :author, :story, :moral)
    end

end
