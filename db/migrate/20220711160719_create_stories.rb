class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :author
      t.string :story
      t.string :moral

      t.timestamps
    end
  end
end
