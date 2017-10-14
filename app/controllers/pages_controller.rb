class PagesController < ApplicationController
  def home
    @titles = Title.all
  end
end
