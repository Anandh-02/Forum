import React from "react";
import './styles.css';

const Jumotron = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-3">Community</h1>
        <p class="lead">We &lt;3 people who code!</p>
        <hr class="my-4" />
        <p className="lead">A disscussion forum for enthusiastic developers.</p>
      </div>
      
			<div class="row">
				<div class="col-sm-6 offset-sm-3">
					<div class="post-block">
						<div class="d-flex justify-content-between">
							<div class="d-flex mb-3">
								<div class="mr-2">
									<a href="#!" class="text-dark"><img src="/user1.jpg" alt="User" class="author-img"/></a>
								</div>
								<div>
									<h5 class="mb-0"><a href="#!" class="text-dark">Kiran Acharya</a></h5>
									<p class="mb-0 text-muted">5m</p>
								</div>
							</div>
							<div class="post-block__user-options">
								<a href="#!" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
										aria-expanded="false">
											<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
								</a>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
									<a class="dropdown-item text-dark" href="#!"><i class="fa fa-pencil mr-1"></i>Edit</a>
									<a class="dropdown-item text-danger" href="#!"><i class="fa fa-trash mr-1"></i>Delete</a>
								</div>
							</div>
						</div>
						<div class="post-block__content mb-2">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laboriosam non atque, porro cupiditate commodi? Provident culpa vel sit enim!</p>
							<img src="/food1.jpg" alt="Content img"/>
						</div>
						<div class="mb-3">
							<div class="d-flex justify-content-between mb-2">
								<div class="d-flex">
									<a href="#!" class="text-danger mr-2"><span><i class="fa fa-heart"></i></span></a>
									<a href="#!" class="text-dark mr-2"><span>Comment</span></a>
								</div>
								<a href="#!" class="text-dark"><span>Share</span></a>
							</div>
							<p class="mb-0">Liked by <a href="#!" class="text-muted font-weight-bold">John doe</a> & <a href="#!" class="text-muted font-weight-bold">25 others</a></p>
						</div>
						<hr/>
						<div class="post-block__comments">
	
							<div class="input-group mb-3">
								<input type="text" class="form-control" placeholder="Add your comment"/>
								<div class="input-group-append">
								  	<button class="btn btn-primary" type="button" id="button-addon2"><i class="fa fa-paper-plane"></i></button>
								</div>
							</div>
              
							<div class="comment-view-box mb-3">
								<div class="d-flex mb-2">
									<img src="/user2.jpg" alt="User img" class="author-img author-img--small mr-2" />
									<div>
										<h6 class="mb-1"><a href="#!" class="text-dark">John doe</a> <small class="text-muted">1m</small></h6>
										<p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										<div class="d-flex">
											<a href="#!" class="text-dark mr-2"><span><i class="fa fa-heart-o"></i></span></a>
											<a href="#!" class="text-dark mr-2"><span>Reply</span></a>
										</div>
									</div>
								</div>
							</div>
              
							<hr/>
							<a href="#!" class="text-dark">View More comments <span class="font-weight-bold">(12)</span></a>
						</div>
					</div>
				</div>
			</div>
    </>
  );
};

export default Jumotron;
